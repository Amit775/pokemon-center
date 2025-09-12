import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupsCreateManyVersionGroupInputEnvelope } from "../inputs/PokedexVersionGroupsCreateManyVersionGroupInputEnvelope";
import { PokedexVersionGroupsCreateOrConnectWithoutVersionGroupInput } from "../inputs/PokedexVersionGroupsCreateOrConnectWithoutVersionGroupInput";
import { PokedexVersionGroupsCreateWithoutVersionGroupInput } from "../inputs/PokedexVersionGroupsCreateWithoutVersionGroupInput";
import { PokedexVersionGroupsWhereUniqueInput } from "../inputs/PokedexVersionGroupsWhereUniqueInput";

@TypeGraphQL.InputType("PokedexVersionGroupsCreateNestedManyWithoutVersionGroupInput", {})
export class PokedexVersionGroupsCreateNestedManyWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => [PokedexVersionGroupsCreateWithoutVersionGroupInput], {
    nullable: true
  })
  create?: PokedexVersionGroupsCreateWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupsCreateOrConnectWithoutVersionGroupInput], {
    nullable: true
  })
  connectOrCreate?: PokedexVersionGroupsCreateOrConnectWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsCreateManyVersionGroupInputEnvelope, {
    nullable: true
  })
  createMany?: PokedexVersionGroupsCreateManyVersionGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupsWhereUniqueInput], {
    nullable: true
  })
  connect?: PokedexVersionGroupsWhereUniqueInput[] | undefined;
}
