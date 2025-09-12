import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExperienceCreateInput } from "../../../inputs/ExperienceCreateInput";
import { ExperienceUpdateInput } from "../../../inputs/ExperienceUpdateInput";
import { ExperienceWhereUniqueInput } from "../../../inputs/ExperienceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneExperienceArgs {
  @TypeGraphQL.Field(_type => ExperienceWhereUniqueInput, {
    nullable: false
  })
  where!: ExperienceWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExperienceCreateInput, {
    nullable: false
  })
  create!: ExperienceCreateInput;

  @TypeGraphQL.Field(_type => ExperienceUpdateInput, {
    nullable: false
  })
  update!: ExperienceUpdateInput;
}
