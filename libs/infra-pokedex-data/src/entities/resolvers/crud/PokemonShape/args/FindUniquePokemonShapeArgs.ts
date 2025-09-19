import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonShapeWhereUniqueInput } from "../../../inputs/PokemonShapeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePokemonShapeArgs {
  @TypeGraphQL.Field(_type => PokemonShapeWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonShapeWhereUniqueInput;
}
