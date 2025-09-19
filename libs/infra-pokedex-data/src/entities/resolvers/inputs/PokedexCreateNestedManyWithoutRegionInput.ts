import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexCreateManyRegionInputEnvelope } from "../inputs/PokedexCreateManyRegionInputEnvelope";
import { PokedexCreateOrConnectWithoutRegionInput } from "../inputs/PokedexCreateOrConnectWithoutRegionInput";
import { PokedexCreateWithoutRegionInput } from "../inputs/PokedexCreateWithoutRegionInput";
import { PokedexWhereUniqueInput } from "../inputs/PokedexWhereUniqueInput";

@TypeGraphQL.InputType("PokedexCreateNestedManyWithoutRegionInput", {})
export class PokedexCreateNestedManyWithoutRegionInput {
  @TypeGraphQL.Field(_type => [PokedexCreateWithoutRegionInput], {
    nullable: true
  })
  create?: PokedexCreateWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexCreateOrConnectWithoutRegionInput], {
    nullable: true
  })
  connectOrCreate?: PokedexCreateOrConnectWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => PokedexCreateManyRegionInputEnvelope, {
    nullable: true
  })
  createMany?: PokedexCreateManyRegionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokedexWhereUniqueInput], {
    nullable: true
  })
  connect?: PokedexWhereUniqueInput[] | undefined;
}
