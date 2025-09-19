import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexVersionGroupCreateManyPokedexInputEnvelope } from "../inputs/PokedexVersionGroupCreateManyPokedexInputEnvelope";
import { PokedexVersionGroupCreateOrConnectWithoutPokedexInput } from "../inputs/PokedexVersionGroupCreateOrConnectWithoutPokedexInput";
import { PokedexVersionGroupCreateWithoutPokedexInput } from "../inputs/PokedexVersionGroupCreateWithoutPokedexInput";
import { PokedexVersionGroupWhereUniqueInput } from "../inputs/PokedexVersionGroupWhereUniqueInput";

@TypeGraphQL.InputType("PokedexVersionGroupCreateNestedManyWithoutPokedexInput", {})
export class PokedexVersionGroupCreateNestedManyWithoutPokedexInput {
  @TypeGraphQL.Field(_type => [PokedexVersionGroupCreateWithoutPokedexInput], {
    nullable: true
  })
  create?: PokedexVersionGroupCreateWithoutPokedexInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupCreateOrConnectWithoutPokedexInput], {
    nullable: true
  })
  connectOrCreate?: PokedexVersionGroupCreateOrConnectWithoutPokedexInput[] | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupCreateManyPokedexInputEnvelope, {
    nullable: true
  })
  createMany?: PokedexVersionGroupCreateManyPokedexInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokedexVersionGroupWhereUniqueInput], {
    nullable: true
  })
  connect?: PokedexVersionGroupWhereUniqueInput[] | undefined;
}
