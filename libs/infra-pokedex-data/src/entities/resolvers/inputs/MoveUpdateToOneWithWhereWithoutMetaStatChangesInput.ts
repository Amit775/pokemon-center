import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveUpdateWithoutMetaStatChangesInput } from "../inputs/MoveUpdateWithoutMetaStatChangesInput";
import { MoveWhereInput } from "../inputs/MoveWhereInput";

@TypeGraphQL.InputType("MoveUpdateToOneWithWhereWithoutMetaStatChangesInput", {})
export class MoveUpdateToOneWithWhereWithoutMetaStatChangesInput {
  @TypeGraphQL.Field(_type => MoveWhereInput, {
    nullable: true
  })
  where?: MoveWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveUpdateWithoutMetaStatChangesInput, {
    nullable: false
  })
  data!: MoveUpdateWithoutMetaStatChangesInput;
}
