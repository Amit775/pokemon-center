import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveUpdateWithoutMachinesInput } from "../inputs/MoveUpdateWithoutMachinesInput";
import { MoveWhereInput } from "../inputs/MoveWhereInput";

@TypeGraphQL.InputType("MoveUpdateToOneWithWhereWithoutMachinesInput", {})
export class MoveUpdateToOneWithWhereWithoutMachinesInput {
  @TypeGraphQL.Field(_type => MoveWhereInput, {
    nullable: true
  })
  where?: MoveWhereInput | undefined;

  @TypeGraphQL.Field(_type => MoveUpdateWithoutMachinesInput, {
    nullable: false
  })
  data!: MoveUpdateWithoutMachinesInput;
}
