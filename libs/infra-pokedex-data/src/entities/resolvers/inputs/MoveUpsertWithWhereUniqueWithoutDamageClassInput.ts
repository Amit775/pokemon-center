import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateWithoutDamageClassInput } from "../inputs/MoveCreateWithoutDamageClassInput";
import { MoveUpdateWithoutDamageClassInput } from "../inputs/MoveUpdateWithoutDamageClassInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveUpsertWithWhereUniqueWithoutDamageClassInput", {})
export class MoveUpsertWithWhereUniqueWithoutDamageClassInput {
  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: false
  })
  where!: MoveWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveUpdateWithoutDamageClassInput, {
    nullable: false
  })
  update!: MoveUpdateWithoutDamageClassInput;

  @TypeGraphQL.Field(_type => MoveCreateWithoutDamageClassInput, {
    nullable: false
  })
  create!: MoveCreateWithoutDamageClassInput;
}
