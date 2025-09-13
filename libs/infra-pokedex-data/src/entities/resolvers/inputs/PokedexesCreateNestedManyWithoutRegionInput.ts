import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexesCreateManyRegionInputEnvelope } from "../inputs/PokedexesCreateManyRegionInputEnvelope";
import { PokedexesCreateOrConnectWithoutRegionInput } from "../inputs/PokedexesCreateOrConnectWithoutRegionInput";
import { PokedexesCreateWithoutRegionInput } from "../inputs/PokedexesCreateWithoutRegionInput";
import { PokedexesWhereUniqueInput } from "../inputs/PokedexesWhereUniqueInput";

@TypeGraphQL.InputType("PokedexesCreateNestedManyWithoutRegionInput", {})
export class PokedexesCreateNestedManyWithoutRegionInput {
  @TypeGraphQL.Field(_type => [PokedexesCreateWithoutRegionInput], {
    nullable: true
  })
  create?: PokedexesCreateWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexesCreateOrConnectWithoutRegionInput], {
    nullable: true
  })
  connectOrCreate?: PokedexesCreateOrConnectWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => PokedexesCreateManyRegionInputEnvelope, {
    nullable: true
  })
  createMany?: PokedexesCreateManyRegionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokedexesWhereUniqueInput], {
    nullable: true
  })
  connect?: PokedexesWhereUniqueInput[] | undefined;
}
