import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupCreateManyVersionGroupInputEnvelope } from "../inputs/PokedexVersionGroupCreateManyVersionGroupInputEnvelope";
import { PokedexVersionGroupCreateOrConnectWithoutVersionGroupInput } from "../inputs/PokedexVersionGroupCreateOrConnectWithoutVersionGroupInput";
import { PokedexVersionGroupCreateWithoutVersionGroupInput } from "../inputs/PokedexVersionGroupCreateWithoutVersionGroupInput";
import { PokedexVersionGroupWhereUniqueInput } from "../inputs/PokedexVersionGroupWhereUniqueInput";

@TypeGraphQL.InputType("PokedexVersionGroupCreateNestedManyWithoutVersionGroupInput", {})
export class PokedexVersionGroupCreateNestedManyWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => [PokedexVersionGroupCreateWithoutVersionGroupInput], {
    nullable: true
  })
  create?: PokedexVersionGroupCreateWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupCreateOrConnectWithoutVersionGroupInput], {
    nullable: true
  })
  connectOrCreate?: PokedexVersionGroupCreateOrConnectWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupCreateManyVersionGroupInputEnvelope, {
    nullable: true
  })
  createMany?: PokedexVersionGroupCreateManyVersionGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupWhereUniqueInput], {
    nullable: true
  })
  connect?: PokedexVersionGroupWhereUniqueInput[] | undefined;
}
