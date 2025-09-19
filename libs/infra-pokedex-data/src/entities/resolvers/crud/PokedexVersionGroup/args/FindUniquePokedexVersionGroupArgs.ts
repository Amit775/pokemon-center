import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexVersionGroupWhereUniqueInput } from "../../../inputs/PokedexVersionGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePokedexVersionGroupArgs {
  @TypeGraphQL.Field(_type => PokedexVersionGroupWhereUniqueInput, {
    nullable: false
  })
  where!: PokedexVersionGroupWhereUniqueInput;
}
