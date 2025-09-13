import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NaturesCreateManyIncreasedStatInput } from "../inputs/NaturesCreateManyIncreasedStatInput";

@TypeGraphQL.InputType("NaturesCreateManyIncreasedStatInputEnvelope", {})
export class NaturesCreateManyIncreasedStatInputEnvelope {
  @TypeGraphQL.Field(_type => [NaturesCreateManyIncreasedStatInput], {
    nullable: false
  })
  data!: NaturesCreateManyIncreasedStatInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
