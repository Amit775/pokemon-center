import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMovesOrderByWithRelationInput } from "../../../inputs/PokemonMovesOrderByWithRelationInput";
import { PokemonMovesWhereInput } from "../../../inputs/PokemonMovesWhereInput";
import { PokemonMovesWhereUniqueInput } from "../../../inputs/PokemonMovesWhereUniqueInput";
import { PokemonMovesScalarFieldEnum } from "../../../../enums/PokemonMovesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class PokemonMoveMethodsPokemonMovesArgs {
  @TypeGraphQL.Field(_type => PokemonMovesWhereInput, {
    nullable: true
  })
  where?: PokemonMovesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonMovesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonMovesWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonMovesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PokemonMovesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"pokemon_id" | "version_group_id" | "move_id" | "pokemon_move_method_id" | "level" | "order" | "mastery"> | undefined;
}
