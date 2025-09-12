import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RegionsCreateInput } from "../../../inputs/RegionsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneRegionsArgs {
  @TypeGraphQL.Field(_type => RegionsCreateInput, {
    nullable: false
  })
  data!: RegionsCreateInput;
}
