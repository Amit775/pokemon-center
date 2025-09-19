import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestComboCreateManySecondMoveInput } from "../inputs/SuperContestComboCreateManySecondMoveInput";

@TypeGraphQL.InputType("SuperContestComboCreateManySecondMoveInputEnvelope", {})
export class SuperContestComboCreateManySecondMoveInputEnvelope {
  @TypeGraphQL.Field(_type => [SuperContestComboCreateManySecondMoveInput], {
    nullable: false
  })
  data!: SuperContestComboCreateManySecondMoveInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
