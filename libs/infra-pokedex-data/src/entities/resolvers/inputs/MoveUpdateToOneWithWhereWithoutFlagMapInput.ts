import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveUpdateWithoutFlagMapInput } from "../inputs/MoveUpdateWithoutFlagMapInput";
import { MoveWhereInput } from "../inputs/MoveWhereInput";

@TypeGraphQL.InputType("MoveUpdateToOneWithWhereWithoutFlagMapInput", {})
export class MoveUpdateToOneWithWhereWithoutFlagMapInput {
  @TypeGraphQL.Field(_type => MoveWhereInput, {
    nullable: true
  })
  where?: MoveWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveUpdateWithoutFlagMapInput, {
    nullable: false
  })
  data!: MoveUpdateWithoutFlagMapInput;
}
