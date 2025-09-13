import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupsCreateManyPokedexInputEnvelope } from "../inputs/PokedexVersionGroupsCreateManyPokedexInputEnvelope";
import { PokedexVersionGroupsCreateOrConnectWithoutPokedexInput } from "../inputs/PokedexVersionGroupsCreateOrConnectWithoutPokedexInput";
import { PokedexVersionGroupsCreateWithoutPokedexInput } from "../inputs/PokedexVersionGroupsCreateWithoutPokedexInput";
import { PokedexVersionGroupsWhereUniqueInput } from "../inputs/PokedexVersionGroupsWhereUniqueInput";

@TypeGraphQL.InputType("PokedexVersionGroupsCreateNestedManyWithoutPokedexInput", {})
export class PokedexVersionGroupsCreateNestedManyWithoutPokedexInput {
  @TypeGraphQL.Field(_type => [PokedexVersionGroupsCreateWithoutPokedexInput], {
    nullable: true
  })
  create?: PokedexVersionGroupsCreateWithoutPokedexInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupsCreateOrConnectWithoutPokedexInput], {
    nullable: true
  })
  connectOrCreate?: PokedexVersionGroupsCreateOrConnectWithoutPokedexInput[] | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsCreateManyPokedexInputEnvelope, {
    nullable: true
  })
  createMany?: PokedexVersionGroupsCreateManyPokedexInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupsWhereUniqueInput], {
    nullable: true
  })
  connect?: PokedexVersionGroupsWhereUniqueInput[] | undefined;
}
