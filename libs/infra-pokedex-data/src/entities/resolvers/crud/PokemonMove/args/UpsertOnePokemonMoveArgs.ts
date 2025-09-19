import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMoveCreateInput } from "../../../inputs/PokemonMoveCreateInput";
import { PokemonMoveUpdateInput } from "../../../inputs/PokemonMoveUpdateInput";
import { PokemonMoveWhereUniqueInput } from "../../../inputs/PokemonMoveWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonMoveArgs {
  @TypeGraphQL.Field(_type => PokemonMoveWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMoveWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonMoveCreateInput, {
    nullable: false
  })
  create!: PokemonMoveCreateInput;

  @TypeGraphQL.Field(_type => PokemonMoveUpdateInput, {
    nullable: false
  })
  update!: PokemonMoveUpdateInput;
}
