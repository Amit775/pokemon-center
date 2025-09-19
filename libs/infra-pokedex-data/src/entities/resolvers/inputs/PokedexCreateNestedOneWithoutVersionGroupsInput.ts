import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexCreateOrConnectWithoutVersionGroupsInput } from "../inputs/PokedexCreateOrConnectWithoutVersionGroupsInput";
import { PokedexCreateWithoutVersionGroupsInput } from "../inputs/PokedexCreateWithoutVersionGroupsInput";
import { PokedexWhereUniqueInput } from "../inputs/PokedexWhereUniqueInput";

@TypeGraphQL.InputType("PokedexCreateNestedOneWithoutVersionGroupsInput", {})
export class PokedexCreateNestedOneWithoutVersionGroupsInput {
  @TypeGraphQL.Field(_type => PokedexCreateWithoutVersionGroupsInput, {
    nullable: true
  })
  create?: PokedexCreateWithoutVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => PokedexCreateOrConnectWithoutVersionGroupsInput, {
    nullable: true
  })
  connectOrCreate?: PokedexCreateOrConnectWithoutVersionGroupsInput | undefined;

  @TypeGraphQL.Field(_type => PokedexWhereUniqueInput, {
    nullable: true
  })
  connect?: PokedexWhereUniqueInput | undefined;
}
