import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveUpdateWithoutDamageClassInput } from "../inputs/MoveUpdateWithoutDamageClassInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveUpdateWithWhereUniqueWithoutDamageClassInput", {})
export class MoveUpdateWithWhereUniqueWithoutDamageClassInput {
  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: false
  })
  where!: MoveWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveUpdateWithoutDamageClassInput, {
    nullable: false
  })
  data!: MoveUpdateWithoutDamageClassInput;
}
