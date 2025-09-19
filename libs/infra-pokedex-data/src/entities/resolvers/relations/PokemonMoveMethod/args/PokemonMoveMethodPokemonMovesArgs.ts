import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMoveOrderByWithRelationInput } from "../../../inputs/PokemonMoveOrderByWithRelationInput";
import { PokemonMoveWhereInput } from "../../../inputs/PokemonMoveWhereInput";
import { PokemonMoveWhereUniqueInput } from "../../../inputs/PokemonMoveWhereUniqueInput";
import { PokemonMoveScalarFieldEnum } from "../../../../enums/PokemonMoveScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class PokemonMoveMethodPokemonMovesArgs {
  @TypeGraphQL.Field(_type => PokemonMoveWhereInput, {
    nullable: true
  })
  where?: PokemonMoveWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonMoveOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonMoveWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"pokemon_id" | "version_group_id" | "move_id" | "pokemon_move_method_id" | "level" | "order" | "mastery"> | undefined;
}
