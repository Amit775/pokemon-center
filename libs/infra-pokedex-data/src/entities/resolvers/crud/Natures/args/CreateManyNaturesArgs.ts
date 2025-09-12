import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NaturesCreateManyInput } from "../../../inputs/NaturesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyNaturesArgs {
  @TypeGraphQL.Field(_type => [NaturesCreateManyInput], {
    nullable: false
  })
  data!: NaturesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
