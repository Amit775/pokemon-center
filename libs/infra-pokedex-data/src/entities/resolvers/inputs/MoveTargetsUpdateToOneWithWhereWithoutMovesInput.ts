import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveTargetsUpdateWithoutMovesInput } from "../inputs/MoveTargetsUpdateWithoutMovesInput";
import { MoveTargetsWhereInput } from "../inputs/MoveTargetsWhereInput";

@TypeGraphQL.InputType("MoveTargetsUpdateToOneWithWhereWithoutMovesInput", {})
export class MoveTargetsUpdateToOneWithWhereWithoutMovesInput {
  @TypeGraphQL.Field(_type => MoveTargetsWhereInput, {
    nullable: true
  })
  where?: MoveTargetsWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveTargetsUpdateWithoutMovesInput, {
    nullable: false
  })
  data!: MoveTargetsUpdateWithoutMovesInput;
}
