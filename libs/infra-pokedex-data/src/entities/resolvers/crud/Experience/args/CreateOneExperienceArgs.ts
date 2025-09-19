import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExperienceCreateInput } from "../../../inputs/ExperienceCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneExperienceArgs {
  @TypeGraphQL.Field(_type => ExperienceCreateInput, {
    nullable: false
  })
  data!: ExperienceCreateInput;
}
