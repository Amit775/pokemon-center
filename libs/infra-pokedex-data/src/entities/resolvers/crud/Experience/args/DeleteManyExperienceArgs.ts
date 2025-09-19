import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExperienceWhereInput } from "../../../inputs/ExperienceWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyExperienceArgs {
  @TypeGraphQL.Field(_type => ExperienceWhereInput, {
    nullable: true
  })
  where?: ExperienceWhereInput | undefined;
}
