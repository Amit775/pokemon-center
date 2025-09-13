import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexVersionGroupsOrderByWithRelationInput } from "../../../inputs/PokedexVersionGroupsOrderByWithRelationInput";
import { PokedexVersionGroupsWhereInput } from "../../../inputs/PokedexVersionGroupsWhereInput";
import { PokedexVersionGroupsWhereUniqueInput } from "../../../inputs/PokedexVersionGroupsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePokedexVersionGroupsArgs {
  @TypeGraphQL.Field(_type => PokedexVersionGroupsWhereInput, {
    nullable: true
  })
  where?: PokedexVersionGroupsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokedexVersionGroupsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokedexVersionGroupsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
