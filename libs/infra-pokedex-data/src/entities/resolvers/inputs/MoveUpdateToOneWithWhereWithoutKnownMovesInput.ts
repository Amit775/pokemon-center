import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveUpdateWithoutKnownMovesInput } from "../inputs/MoveUpdateWithoutKnownMovesInput";
import { MoveWhereInput } from "../inputs/MoveWhereInput";

@TypeGraphQL.InputType("MoveUpdateToOneWithWhereWithoutKnownMovesInput", {})
export class MoveUpdateToOneWithWhereWithoutKnownMovesInput {
  @TypeGraphQL.Field(_type => MoveWhereInput, {
    nullable: true
  })
  where?: MoveWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveUpdateWithoutKnownMovesInput, {
    nullable: false
  })
  data!: MoveUpdateWithoutKnownMovesInput;
}
