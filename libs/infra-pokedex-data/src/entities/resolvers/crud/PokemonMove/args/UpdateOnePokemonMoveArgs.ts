import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMoveUpdateInput } from "../../../inputs/PokemonMoveUpdateInput";
import { PokemonMoveWhereUniqueInput } from "../../../inputs/PokemonMoveWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonMoveArgs {
  @TypeGraphQL.Field(_type => PokemonMoveUpdateInput, {
    nullable: false
  })
  data!: PokemonMoveUpdateInput;

  @TypeGraphQL.Field(_type => PokemonMoveWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMoveWhereUniqueInput;
}
