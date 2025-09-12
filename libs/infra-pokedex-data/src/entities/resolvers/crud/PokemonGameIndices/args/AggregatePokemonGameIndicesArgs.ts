import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonGameIndicesOrderByWithRelationInput } from "../../../inputs/PokemonGameIndicesOrderByWithRelationInput";
import { PokemonGameIndicesWhereInput } from "../../../inputs/PokemonGameIndicesWhereInput";
import { PokemonGameIndicesWhereUniqueInput } from "../../../inputs/PokemonGameIndicesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePokemonGameIndicesArgs {
  @TypeGraphQL.Field(_type => PokemonGameIndicesWhereInput, {
    nullable: true
  })
  where?: PokemonGameIndicesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonGameIndicesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonGameIndicesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndicesWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonGameIndicesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
