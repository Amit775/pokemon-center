import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveUpdateWithoutTypeInput } from "../inputs/MoveUpdateWithoutTypeInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveUpdateWithWhereUniqueWithoutTypeInput", {})
export class MoveUpdateWithWhereUniqueWithoutTypeInput {
  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: false
  })
  where!: MoveWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveUpdateWithoutTypeInput, {
    nullable: false
  })
  data!: MoveUpdateWithoutTypeInput;
}
