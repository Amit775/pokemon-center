import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RegionsWhereUniqueInput } from "../../../inputs/RegionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueRegionsArgs {
  @TypeGraphQL.Field(_type => RegionsWhereUniqueInput, {
    nullable: false
  })
  where!: RegionsWhereUniqueInput;
}
