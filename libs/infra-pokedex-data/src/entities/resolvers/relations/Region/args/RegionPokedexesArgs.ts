import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokedexOrderByWithRelationInput } from "../../../inputs/PokedexOrderByWithRelationInput";
import { PokedexWhereInput } from "../../../inputs/PokedexWhereInput";
import { PokedexWhereUniqueInput } from "../../../inputs/PokedexWhereUniqueInput";
import { PokedexScalarFieldEnum } from "../../../../enums/PokedexScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class RegionPokedexesArgs {
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

  @TypeGraphQL.Field(_type => [PokedexScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "region_id" | "identifier" | "is_main_series"> | undefined;
}
