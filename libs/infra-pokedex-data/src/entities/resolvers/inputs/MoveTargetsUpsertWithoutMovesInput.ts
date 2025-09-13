import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveTargetsCreateWithoutMovesInput } from "../inputs/MoveTargetsCreateWithoutMovesInput";
import { MoveTargetsUpdateWithoutMovesInput } from "../inputs/MoveTargetsUpdateWithoutMovesInput";
import { MoveTargetsWhereInput } from "../inputs/MoveTargetsWhereInput";

@TypeGraphQL.InputType("MoveTargetsUpsertWithoutMovesInput", {})
export class MoveTargetsUpsertWithoutMovesInput {
  @TypeGraphQL.Field(_type => MoveTargetsUpdateWithoutMovesInput, {
    nullable: false
  })
  update!: MoveTargetsUpdateWithoutMovesInput;

  @TypeGraphQL.Field(_type => MoveTargetsCreateWithoutMovesInput, {
    nullable: false
  })
  create!: MoveTargetsCreateWithoutMovesInput;

  @TypeGraphQL.Field(_type => MoveTargetsWhereInput, {
    nullable: true
  })
  where?: MoveTargetsWhereInput | undefined;
}
