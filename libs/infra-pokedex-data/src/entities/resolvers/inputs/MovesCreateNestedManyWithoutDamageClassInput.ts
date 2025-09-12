import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateManyDamageClassInputEnvelope } from "../inputs/MovesCreateManyDamageClassInputEnvelope";
import { MovesCreateOrConnectWithoutDamageClassInput } from "../inputs/MovesCreateOrConnectWithoutDamageClassInput";
import { MovesCreateWithoutDamageClassInput } from "../inputs/MovesCreateWithoutDamageClassInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesCreateNestedManyWithoutDamageClassInput", {})
export class MovesCreateNestedManyWithoutDamageClassInput {
  @TypeGraphQL.Field(_type => [MovesCreateWithoutDamageClassInput], {
    nullable: true
  })
  create?: MovesCreateWithoutDamageClassInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovesCreateOrConnectWithoutDamageClassInput], {
    nullable: true
  })
  connectOrCreate?: MovesCreateOrConnectWithoutDamageClassInput[] | undefined;

  @TypeGraphQL.Field(_type => MovesCreateManyDamageClassInputEnvelope, {
    nullable: true
  })
  createMany?: MovesCreateManyDamageClassInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovesWhereUniqueInput], {
    nullable: true
  })
  connect?: MovesWhereUniqueInput[] | undefined;
}
