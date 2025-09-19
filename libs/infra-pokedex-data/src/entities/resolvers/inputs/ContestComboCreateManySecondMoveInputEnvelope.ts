import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestComboCreateManySecondMoveInput } from "../inputs/ContestComboCreateManySecondMoveInput";

@TypeGraphQL.InputType("ContestComboCreateManySecondMoveInputEnvelope", {})
export class ContestComboCreateManySecondMoveInputEnvelope {
  @TypeGraphQL.Field(_type => [ContestComboCreateManySecondMoveInput], {
    nullable: false
  })
  data!: ContestComboCreateManySecondMoveInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
