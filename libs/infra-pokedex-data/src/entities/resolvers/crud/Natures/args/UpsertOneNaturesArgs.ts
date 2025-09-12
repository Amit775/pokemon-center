import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NaturesCreateInput } from "../../../inputs/NaturesCreateInput";
import { NaturesUpdateInput } from "../../../inputs/NaturesUpdateInput";
import { NaturesWhereUniqueInput } from "../../../inputs/NaturesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneNaturesArgs {
  @TypeGraphQL.Field(_type => NaturesWhereUniqueInput, {
    nullable: false
  })
  where!: NaturesWhereUniqueInput;

  @TypeGraphQL.Field(_type => NaturesCreateInput, {
    nullable: false
  })
  create!: NaturesCreateInput;

  @TypeGraphQL.Field(_type => NaturesUpdateInput, {
    nullable: false
  })
  update!: NaturesUpdateInput;
}
