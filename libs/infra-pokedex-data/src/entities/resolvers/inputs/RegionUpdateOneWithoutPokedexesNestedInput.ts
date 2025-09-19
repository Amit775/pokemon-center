import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionCreateOrConnectWithoutPokedexesInput } from "../inputs/RegionCreateOrConnectWithoutPokedexesInput";
import { RegionCreateWithoutPokedexesInput } from "../inputs/RegionCreateWithoutPokedexesInput";
import { RegionUpdateToOneWithWhereWithoutPokedexesInput } from "../inputs/RegionUpdateToOneWithWhereWithoutPokedexesInput";
import { RegionUpsertWithoutPokedexesInput } from "../inputs/RegionUpsertWithoutPokedexesInput";
import { RegionWhereInput } from "../inputs/RegionWhereInput";
import { RegionWhereUniqueInput } from "../inputs/RegionWhereUniqueInput";

@TypeGraphQL.InputType("RegionUpdateOneWithoutPokedexesNestedInput", {})
export class RegionUpdateOneWithoutPokedexesNestedInput {
  @TypeGraphQL.Field(_type => RegionCreateWithoutPokedexesInput, {
    nullable: true
  })
  create?: RegionCreateWithoutPokedexesInput | undefined;

  @TypeGraphQL.Field(_type => RegionCreateOrConnectWithoutPokedexesInput, {
    nullable: true
  })
  connectOrCreate?: RegionCreateOrConnectWithoutPokedexesInput | undefined;

  @TypeGraphQL.Field(_type => RegionUpsertWithoutPokedexesInput, {
    nullable: true
  })
  upsert?: RegionUpsertWithoutPokedexesInput | undefined;

  @TypeGraphQL.Field(_type => RegionWhereInput, {
    nullable: true
  })
  disconnect?: RegionWhereInput | undefined;

  @TypeGraphQL.Field(_type => RegionWhereInput, {
    nullable: true
  })
  delete?: RegionWhereInput | undefined;

  @TypeGraphQL.Field(_type => RegionWhereUniqueInput, {
    nullable: true
  })
  connect?: RegionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => RegionUpdateToOneWithWhereWithoutPokedexesInput, {
    nullable: true
  })
  update?: RegionUpdateToOneWithWhereWithoutPokedexesInput | undefined;
}
