import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateWithoutTargetInput } from "../inputs/MoveCreateWithoutTargetInput";
import { MoveUpdateWithoutTargetInput } from "../inputs/MoveUpdateWithoutTargetInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveUpsertWithWhereUniqueWithoutTargetInput", {})
export class MoveUpsertWithWhereUniqueWithoutTargetInput {
  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: false
  })
  where!: MoveWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveUpdateWithoutTargetInput, {
    nullable: false
  })
  update!: MoveUpdateWithoutTargetInput;

  @TypeGraphQL.Field(_type => MoveCreateWithoutTargetInput, {
    nullable: false
  })
  create!: MoveCreateWithoutTargetInput;
}
