import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexOrderByWithRelationInput } from "../../../inputs/PokedexOrderByWithRelationInput";
import { PokedexWhereInput } from "../../../inputs/PokedexWhereInput";
import { PokedexWhereUniqueInput } from "../../../inputs/PokedexWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePokedexArgs {
  @TypeGraphQL.Field(_type => PokedexWhereInput, {
    nullable: true
  })
  where?: PokedexWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokedexOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokedexOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokedexWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokedexWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
