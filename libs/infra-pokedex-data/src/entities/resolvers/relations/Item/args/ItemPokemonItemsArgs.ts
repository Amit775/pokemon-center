import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonItemOrderByWithRelationInput } from "../../../inputs/PokemonItemOrderByWithRelationInput";
import { PokemonItemWhereInput } from "../../../inputs/PokemonItemWhereInput";
import { PokemonItemWhereUniqueInput } from "../../../inputs/PokemonItemWhereUniqueInput";
import { PokemonItemScalarFieldEnum } from "../../../../enums/PokemonItemScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ItemPokemonItemsArgs {
  @TypeGraphQL.Field(_type => PokemonItemWhereInput, {
    nullable: true
  })
  where?: PokemonItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonItemOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonItemWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonItemWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PokemonItemScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"pokemon_id" | "version_id" | "item_id" | "rarity"> | undefined;
}
