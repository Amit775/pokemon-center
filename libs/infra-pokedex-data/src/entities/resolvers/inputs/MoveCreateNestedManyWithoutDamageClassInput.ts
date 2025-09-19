import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateManyDamageClassInputEnvelope } from "../inputs/MoveCreateManyDamageClassInputEnvelope";
import { MoveCreateOrConnectWithoutDamageClassInput } from "../inputs/MoveCreateOrConnectWithoutDamageClassInput";
import { MoveCreateWithoutDamageClassInput } from "../inputs/MoveCreateWithoutDamageClassInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveCreateNestedManyWithoutDamageClassInput", {})
export class MoveCreateNestedManyWithoutDamageClassInput {
  @TypeGraphQL.Field(_type => [MoveCreateWithoutDamageClassInput], {
    nullable: true
  })
  create?: MoveCreateWithoutDamageClassInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveCreateOrConnectWithoutDamageClassInput], {
    nullable: true
  })
  connectOrCreate?: MoveCreateOrConnectWithoutDamageClassInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveCreateManyDamageClassInputEnvelope, {
    nullable: true
  })
  createMany?: MoveCreateManyDamageClassInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MoveWhereUniqueInput], {
    nullable: true
  })
  connect?: MoveWhereUniqueInput[] | undefined;
}
