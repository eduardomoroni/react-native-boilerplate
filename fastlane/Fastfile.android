platform :android do
  desc 'Clean Android project.'
  lane :clean do
    gradle(task: 'clean', project_dir: 'android/')
  end

  desc 'Build the Android application.'
  lane :build do
    clean
    gradle(
      task: 'assemble',
      build_type: 'Release',
      project_dir: 'android/'
    )
  end

  desc "Runs all the tests"
  lane :test do
    gradle(task: "test")
  end

  desc "Deploy a new version to the Google Play"
  lane :deploy do
    build
    gradle(task: "assembleRelease")
    upload_to_play_store
  end
end
