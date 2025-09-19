import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveTargetUpdateWithoutMovesInput } from "../inputs/MoveTargetUpdateWithoutMovesInput";
import { MoveTargetWhereInput } from "../inputs/MoveTargetWhereInput";

@TypeGraphQL.InputType("MoveTargetUpdateToOneWithWhereWithoutMovesInput", {})
export class MoveTargetUpdateToOneWithWhereWithoutMovesInput {
  @TypeGraphQL.Field(_type => MoveTargetWhereInput, {
    nullable: true
  })
  where?: MoveTargetWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveTargetUpdateWithoutMovesInput, {
    nullable: false
  })
  data!: MoveTargetUpdateWithoutMovesInput;
}
