import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexesCreateOrConnectWithoutVersionGroupsInput } from "../inputs/PokedexesCreateOrConnectWithoutVersionGroupsInput";
import { PokedexesCreateWithoutVersionGroupsInput } from "../inputs/PokedexesCreateWithoutVersionGroupsInput";
import { PokedexesWhereUniqueInput } from "../inputs/PokedexesWhereUniqueInput";

@TypeGraphQL.InputType("PokedexesCreateNestedOneWithoutVersionGroupsInput", {})
export class PokedexesCreateNestedOneWithoutVersionGroupsInput {
  @TypeGraphQL.Field(_type => PokedexesCreateWithoutVersionGroupsInput, {
    nullable: true
  })
  create?: PokedexesCreateWithoutVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => PokedexesCreateOrConnectWithoutVersionGroupsInput, {
    nullable: true
  })
  connectOrCreate?: PokedexesCreateOrConnectWithoutVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => PokedexesWhereUniqueInput, {
    nullable: true
  })
  connect?: PokedexesWhereUniqueInput | undefined;
}
