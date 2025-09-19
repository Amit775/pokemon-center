import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateWithoutMachinesInput } from "../inputs/MoveCreateWithoutMachinesInput";
import { MoveUpdateWithoutMachinesInput } from "../inputs/MoveUpdateWithoutMachinesInput";
import { MoveWhereInput } from "../inputs/MoveWhereInput";

@TypeGraphQL.InputType("MoveUpsertWithoutMachinesInput", {})
export class MoveUpsertWithoutMachinesInput {
  @TypeGraphQL.Field(_type => MoveUpdateWithoutMachinesInput, {
    nullable: false
  })
  update!: MoveUpdateWithoutMachinesInput;

  @TypeGraphQL.Field(_type => MoveCreateWithoutMachinesInput, {
    nullable: false
  })
  create!: MoveCreateWithoutMachinesInput;

  @TypeGraphQL.Field(_type => MoveWhereInput, {
    nullable: true
  })
  where?: MoveWhereInput | undefined;
}
