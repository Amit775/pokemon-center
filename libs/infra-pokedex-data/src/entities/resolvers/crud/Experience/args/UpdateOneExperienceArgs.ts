import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExperienceUpdateInput } from "../../../inputs/ExperienceUpdateInput";
import { ExperienceWhereUniqueInput } from "../../../inputs/ExperienceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneExperienceArgs {
  @TypeGraphQL.Field(_type => ExperienceUpdateInput, {
    nullable: false
  })
  data!: ExperienceUpdateInput;

  @TypeGraphQL.Field(_type => ExperienceWhereUniqueInput, {
    nullable: false
  })
  where!: ExperienceWhereUniqueInput;
}
