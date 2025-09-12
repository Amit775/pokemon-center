import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexesWhereUniqueInput } from "../../../inputs/PokedexesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePokedexesArgs {
  @TypeGraphQL.Field(_type => PokedexesWhereUniqueInput, {
    nullable: false
  })
  where!: PokedexesWhereUniqueInput;
}
