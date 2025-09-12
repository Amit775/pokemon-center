import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMoveMethodsOrderByWithRelationInput } from "../../../inputs/PokemonMoveMethodsOrderByWithRelationInput";
import { PokemonMoveMethodsWhereInput } from "../../../inputs/PokemonMoveMethodsWhereInput";
import { PokemonMoveMethodsWhereUniqueInput } from "../../../inputs/PokemonMoveMethodsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePokemonMoveMethodsArgs {
  @TypeGraphQL.Field(_type => PokemonMoveMethodsWhereInput, {
    nullable: true
  })
  where?: PokemonMoveMethodsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonMoveMethodsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonMoveMethodsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonMoveMethodsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
