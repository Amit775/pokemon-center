import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMoveOrderByWithRelationInput } from "../../../inputs/PokemonMoveOrderByWithRelationInput";
import { PokemonMoveWhereInput } from "../../../inputs/PokemonMoveWhereInput";
import { PokemonMoveWhereUniqueInput } from "../../../inputs/PokemonMoveWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePokemonMoveArgs {
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
}
