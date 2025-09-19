import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestComboCreateManyFirstMoveInput } from "../inputs/ContestComboCreateManyFirstMoveInput";

@TypeGraphQL.InputType("ContestComboCreateManyFirstMoveInputEnvelope", {})
export class ContestComboCreateManyFirstMoveInputEnvelope {
  @TypeGraphQL.Field(_type => [ContestComboCreateManyFirstMoveInput], {
    nullable: false
  })
  data!: ContestComboCreateManyFirstMoveInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
