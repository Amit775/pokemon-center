import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMoveMethodsUpdateInput } from "../../../inputs/PokemonMoveMethodsUpdateInput";
import { PokemonMoveMethodsWhereUniqueInput } from "../../../inputs/PokemonMoveMethodsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonMoveMethodsArgs {
  @TypeGraphQL.Field(_type => PokemonMoveMethodsUpdateInput, {
    nullable: false
  })
  data!: PokemonMoveMethodsUpdateInput;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMoveMethodsWhereUniqueInput;
}
