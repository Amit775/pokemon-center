import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExperienceWhereUniqueInput } from "../../../inputs/ExperienceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneExperienceArgs {
  @TypeGraphQL.Field(_type => ExperienceWhereUniqueInput, {
    nullable: false
  })
  where!: ExperienceWhereUniqueInput;
}
