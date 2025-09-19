import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupCreateInput } from "../../../inputs/VersionGroupCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneVersionGroupArgs {
  @TypeGraphQL.Field(_type => VersionGroupCreateInput, {
    nullable: false
  })
  data!: VersionGroupCreateInput;
}
